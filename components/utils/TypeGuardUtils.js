export const isContact = (item) => {
  const target = item;

  console.log(target.Name, target.Address, target.Message);

  return (
    "Name" in target &&
    typeof target.Name === "string" &&
    !!target.Name &&
    "Message" in target &&
    typeof target.Message === "string" &&
    !!target.Message
  )
}