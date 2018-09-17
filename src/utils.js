export const tokenExpired = () => {
  const accessToken = localStorage.getItem("access_token");
  const expiresIn = localStorage.getItem("expires_in");
  const issuedAt = localStorage.getItem("issued_at");

  if (!accessToken || !expiresIn || !issuedAt) {
    return true;
  } else if (Date.now() - issuedAt > expiresIn * 1000) {
    localStorage.removeItem("access_token");
    localStorage.removeItem("expires_in");
    localStorage.removeItem("issued_at");
    localStorage.removeItem("artists");
    localStorage.removeItem("tracks");
    return true;
  } else {
    return false;
  }
};

export const isTokenInResponse = props => {
  const { access_token, expires_in } = props.location.hash
    .slice(1)
    .split("&")
    .map(x => {
      const [n, m] = x.split("=");
      return {
        [n]: m
      };
    })
    .reduce((x, y) => Object.assign(x, y), {});

  if (access_token !== "") {
    return true;
  } else {
    return false;
  }
};
