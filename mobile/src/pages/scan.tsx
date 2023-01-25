import Navbar from "../components/Navbar";
import { useRef, useState } from "react";
import styles from "../../styles/Home.module.scss";
import Header from "../components/Header";
import QRCode from "react-qr-code";
import { QrReader } from "react-qr-reader";

const Scan = () => {
  const container = useRef(null);
  const imgDimension = 310;

  const QrCode = () => {
    const qrCode = JSON.stringify({
      userId: "8deE-3d3d-3d3d-3d3d",
    });

    return (
      <>
        {/* this card need to become a component with type = info-card */}
        <div className={styles.info_card}>
          <p>
            How it works: This is your qr-code, let the vendor scan this code to
            collect your points.
          </p>
        </div>

        <QRCode value={qrCode} level="Q" size={imgDimension} />
        {/* <Image src='/svg/qr-placeholder.svg' width={imgDimension} height={imgDimension} alt='QR code placeholder'/> */}
      </>
    );
  };

  const CodeScanner = () => {
    const [data, setData] = useState("");

    return (
      <>
        <h1>Company content</h1>
        <QrReader
          onResult={(result, error) => {
            if (error) return setData(error.message);

            if (result) {
              // Handle result
              setData(JSON.parse(result!.getText()).userId);
              window.alert(JSON.parse(result!.getText()).userId);
            }
          }}
          constraints={{ facingMode: "environment" }}
        />
        <p>{data}</p>
      </>
    );
  };

  // Check if user
  // Currently hardcoded
  const isUser = false;

  return (
    <div className={styles.app_container} ref={container}>
      <Header />
      <Navbar />
      <div className={styles.content_container}>
        {isUser ? <QrCode /> : <CodeScanner />}
      </div>
    </div>
  );
};

export default Scan