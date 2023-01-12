import Navbar from "../components/Navbar";
import Image from "next/image";
import React, { useRef } from "react";
import styles from "../../styles/Home.module.scss";
import Header from "../components/Header";
import Filter from "../components/Filter";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../components/Map"), { ssr: false });

const search = () => {
  const container = useRef(null);
  const logoDimensions = {
    width: 20,
    height: 20,
  };

  const iconDimensions = {
    width: 55,
    height: 60,
  };

  const mapDimensions = {
    width: 400,
    height: 200,
  };

  return (
    <div className={styles.app_container} ref={container}>
      <Header />
      <Navbar />

      <div className={styles.content_container}>
        <div className={styles.search_field}>
          {/* filter */}
          <div className={styles.filter}>
            <div className={styles.filter_icon}>
              <Image
                className={styles.filter_item}
                src="/svg/filter.svg"
                width={logoDimensions.width}
                height={logoDimensions.height}
                alt="Filter"
              />
            </div>
          </div>

          {/* search bar */}
          <div className={styles.search_bar}>
            <input
              type="text"
              placeholder="Search for a vendor"
              className={styles.search_input}
            />
            <button className={styles.search_button}>
              <Image
                src="/svg/search-glass.svg"
                width={logoDimensions.width}
                height={logoDimensions.height}
                alt="Search"
              />
            </button>
          </div>
        </div>

        <Filter />
        {/* map */}
        <div className={styles.map}>
          <Map>
            {/* @ts-ignore */}
            {({ TileLayer, Marker, Popup }) => (
              <>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.0499, 3.7333]}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </>
            )}
          </Map>
        </div>

        {/* vendor addresses */}
        <div className={styles.vendor_card}>
          <div className={styles.vendor_header}>
            <Image
              src="/svg/map-pointer.svg"
              width={iconDimensions.width}
              height={iconDimensions.height}
              alt="profile-img"
            />
            <div className={styles.header}>
              <a href="/vendor-detail">
                <h2 className={styles.title}>Ohne</h2>
                <p className={styles.subtitle}>Steendam 68, 9000 Gent</p>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.vendor_card}>
          <div className={styles.vendor_header}>
            <Image
              src="/svg/map-pointer.svg"
              width={iconDimensions.width}
              height={iconDimensions.height}
              alt="profile-img"
            />
            <div className={styles.header}>
              <a href="/vendor-detail">
                <h2 className={styles.title}>Tasty World</h2>
                <p className={styles.subtitle}>Reep 14B, 9000 Gent</p>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.vendor_card}>
          <div className={styles.vendor_header}>
            <Image
              src="/svg/map-pointer.svg"
              width={iconDimensions.width}
              height={iconDimensions.height}
              alt="profile-img"
            />
            <div className={styles.header}>
              <a href="/vendor-detail">
                <h2 className={styles.title}>Appelier</h2>
                <p className={styles.subtitle}>Oude Houtlei 122, 9000 Gent</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default search;
