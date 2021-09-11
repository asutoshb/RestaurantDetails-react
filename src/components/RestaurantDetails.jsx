import React from "react";
// import data from "./data.json";
import styles from "./RestaurantDetails.module.css";

export default function RestaurantDetails(props) {
  return (
    <div className={styles.list} style={{ listStyleType: "none" }}>
      {props.data.map((ele) => {
        return (
          <div className={styles.card} key={ele.id}>
            <div>
              <table>
                <tbody>
                  <tr>
                    <td style={{ width: "25%" }}>
                      <img
                        className={styles.img}
                        src={ele.src}
                        alt={ele.id}
                      ></img>
                    </td>

                    <td>
                      <tr>
                        <h2>{ele.restaurantName}</h2>
                      </tr>

                      <tr className={styles.popular}>
                        {ele.categories.join(", ")}
                      </tr>

                      <tr>
                        <i className={styles.payment}>
                          *Accepts{" "}
                          {Object.keys(ele.paymentMethods)
                          // eslint-disable-next-line
                            .filter((key) => {
                              if (ele.paymentMethods[key] !== false) return key;
                            })
                            .join(", ")
                            .toUpperCase()}{" "}
                          Payment(s) Only
                        </i>
                      </tr>
                    </td>

                    <td style={{ width: "13%", textAlign: "center" }}>
                      <div style={{ height: "0px", paddingBottom: "190px" }}>
                        {Math.round(ele.reviews) === 5 ? (
                          <>
                            <div className={styles.clipStar}></div>
                            <div className={styles.clipStar}></div>
                            <div className={styles.clipStar}></div>
                            <div className={styles.clipStar}></div>
                            <div className={styles.clipStar}></div>
                          </>
                        ) : Math.round(ele.reviews) === 4 ? (
                          <>
                            <div className={styles.clipStar}></div>
                            <div className={styles.clipStar}></div>
                            <div className={styles.clipStar}></div>
                            <div className={styles.clipStar}></div>
                            <div className={styles.noStar}></div>
                          </>
                        ) : Math.round(ele.reviews) === 3 ? (
                          <>
                            <div className={styles.clipStar}></div>
                            <div className={styles.clipStar}></div>
                            <div className={styles.clipStar}></div>
                            <div className={styles.noStar}></div>
                            <div className={styles.noStar}></div>
                          </>
                        ) : Math.round(ele.reviews) === 2 ? (
                          <>
                            <div className={styles.clipStar}></div>
                            <div className={styles.clipStar}></div>
                            <div className={styles.noStar}></div>
                            <div className={styles.noStar}></div>
                            <div className={styles.noStar}></div>
                          </>
                        ) : Math.round(ele.reviews) === 1 ? (
                          <>
                            <div className={styles.clipStar}></div>
                            <div className={styles.noStar}></div>
                            <div className={styles.noStar}></div>
                            <div className={styles.noStar}></div>
                            <div className={styles.noStar}></div>
                          </>
                        ) : (
                          <>
                            <div className={styles.noStar}></div>
                            <div className={styles.noStar}></div>
                            <div className={styles.noStar}></div>
                            <div className={styles.noStar}></div>
                            <div className={styles.noStar}></div>
                          </>
                        )}
                        <div style={{ textAlign: "center", color: "red" }}>
                          Reviews ({ele.reviews})
                        </div>
                      </div>
                      <div style={{ marginTop: "-130px", color: "red" }}>
                        {ele.totalVotes} Votes
                      </div>
                      <div className={styles.feeBtn}>
                        ₹{ele.cost_for_one}/Person
                      </div>
                      <div className={styles.feeBtn}>
                        ₹{ele.cost_for_two}/Couple
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      })}
    </div>
  );
}
