export default function getFirstName(name) {
  const isName = typeof name === 'string';
  if (isName) {
    const firstName = name.split(' ');
    return firstName[0];
  }
  return name;
}
