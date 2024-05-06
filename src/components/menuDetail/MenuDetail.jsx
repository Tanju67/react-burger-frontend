/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import styles from "./MenuDetail.module.css";
import MenuLayout from "../../shared/UIElements/MenuLayout";
import Products from "./Products";

function MenuDetail({ data }) {
  const role = useSelector((state) => state.auth.user.role);
  return (
    <MenuLayout
      title={data.length > 0 ? data[0].menu.title : "No Product"}
      orderBtn={role !== "admin"}
    >
      {data.length > 0 && <Products data={data} />}
      {data.length === 0 && (
        <p className={styles.notFound}>
          There is no product yet in this menu section.
        </p>
      )}
    </MenuLayout>
  );
}

export default MenuDetail;
