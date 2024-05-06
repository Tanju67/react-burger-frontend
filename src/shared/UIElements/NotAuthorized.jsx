import MenuLayout from "./MenuLayout";

function NotAuthorized() {
  return (
    <MenuLayout title={"Not Authorized"} sidebar={false}>
      <h1 style={{ textAlign: "center" }}>
        You are not authorized for this route.
      </h1>
    </MenuLayout>
  );
}

export default NotAuthorized;
