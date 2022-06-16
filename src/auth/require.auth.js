export default function requireAuth(nextState, replace, next) {
  if (!localStorage.getItem("accessToken")) {
    replace({
      pathname: "/login",
      state: { nextPathname: nextState.location.pathname },
    });
  }
  next();
}
