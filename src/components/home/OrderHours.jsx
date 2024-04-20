import React from "react";
import styles from "./OrderHours.module.css";
import SectionLayout from "../../shared/UIElements/SectionLayout";
import Card from "../../shared/UIElements/Card";
import Map from "../../shared/UIElements/Map";

function OrderHours() {
  const dayIndex = new Date(Date.now()).getDay();

  return (
    <SectionLayout title={"Order hours"}>
      <Card className={styles.mainCard}>
        <ul>
          <li>
            <Card
              className={`${styles.dayCard} ${
                dayIndex === 1 ? styles.active : ""
              }`}
            >
              <span className={styles.lightCircle}>
                <span className={styles.marker}>
                  <i></i>
                </span>
              </span>
              <div className={styles.content}>
                <div>11:00 - 22:00</div>
                <div>Monday</div>
              </div>
            </Card>
          </li>
          <li>
            <Card
              className={`${styles.dayCard} ${
                dayIndex === 2 ? styles.active : ""
              }`}
            >
              <span className={styles.lightCircle}>
                <span className={styles.marker}>
                  <i></i>
                </span>
              </span>
              <div className={styles.content}>
                <div>11:00 - 22:00</div>
                <div>Tuesday</div>
              </div>
            </Card>
          </li>
          <li>
            <Card
              className={`${styles.dayCard} ${
                dayIndex === 3 ? styles.active : ""
              }`}
            >
              <span className={styles.lightCircle}>
                <span className={styles.marker}>
                  <i></i>
                </span>
              </span>
              <div className={styles.content}>
                <div>11:00 - 22:00</div>
                <div>Wednesday</div>
              </div>
            </Card>
          </li>
          <li>
            <Card
              className={`${styles.dayCard} ${
                dayIndex === 4 ? styles.active : ""
              }`}
            >
              <span className={styles.lightCircle}>
                <span className={styles.marker}>
                  <i></i>
                </span>
              </span>
              <div className={styles.content}>
                <div>11:00 - 22:00</div>
                <div>Thursday</div>
              </div>
            </Card>
          </li>
          <li>
            <Card
              className={`${styles.dayCard} ${
                dayIndex === 5 ? styles.active : ""
              }`}
            >
              <span className={styles.lightCircle}>
                <span className={styles.marker}>
                  <i></i>
                </span>
              </span>
              <div className={styles.content}>
                <div>11:00 - 22:00</div>
                <div>Friday</div>
              </div>
            </Card>
          </li>
          <li>
            <Card
              className={`${styles.dayCard} ${
                dayIndex === 6 ? styles.active : ""
              }`}
            >
              <span className={styles.lightCircle}>
                <span className={styles.marker}>
                  <i></i>
                </span>
              </span>
              <div className={styles.content}>
                <div>11:00 - 00:00</div>
                <div>Saturday</div>
              </div>
            </Card>
          </li>
          <li>
            <Card
              className={`${styles.dayCard} ${
                dayIndex === 7 ? styles.active : ""
              }`}
            >
              <span className={styles.lightCircle}>
                <span className={styles.marker}>
                  <i></i>
                </span>
              </span>
              <div className={styles.content}>
                <div>11:00 - 20:00</div>
                <div>Sunday</div>
              </div>
            </Card>
          </li>
        </ul>
        <div className={styles.map}>
          <Map />
        </div>
      </Card>
    </SectionLayout>
  );
}

export default OrderHours;
