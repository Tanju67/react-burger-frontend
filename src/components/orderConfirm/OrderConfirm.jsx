import MenuLayout from "../../shared/UIElements/MenuLayout";
import ConfirmForm from "./ConfirmForm";

function OrderConfirm() {
  return (
    <MenuLayout
      title={"Confirm Your Order"}
      orderBtn={false}
      cart={false}
      confirm={true}
    >
      <ConfirmForm />
    </MenuLayout>
  );
}

export default OrderConfirm;
