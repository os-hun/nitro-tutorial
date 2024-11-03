export default eventHandler((e) => {
  const name = getRouterParam(e, 'name');
  return { message: `Hello, ${name}!` };
});
