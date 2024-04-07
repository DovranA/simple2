import {
  Children,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styles from "./style.module.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Slider = ({ image }: { image: { src: string }[] }) => {
  return (
    <section className={styles.slider}>
      <Container>
        {image.map((item: any, idx: number) => (
          <img src={item.img} alt={String(idx)} key={idx} />
        ))}
      </Container>
    </section>
  );
};
const Container = ({ children }: { children: React.ReactNode[] }) => {
  const containerRef = useRef<HTMLUListElement>(null);
  const intervalRef = useRef<any>(null);
  const [current, setCurrent] = useState(1);
  const [translateX, setTranslateX] = useState(0);
  const actionHandler = useCallback(
    (mode: string) => {
      if (containerRef.current) {
        containerRef.current.style.transitionDuration = "400ms";
        if (mode === "prev") {
          if (current <= 1) {
            setTranslateX(0);
            setCurrent(containerRef.current?.children.length);
          } else {
            setTranslateX(containerRef.current?.clientWidth * (current - 1));
            setCurrent((prev) => --prev);
          }
        } else if (mode === "next") {
          if (current >= children.length) {
            setTranslateX(
              containerRef.current?.clientWidth * (children.length + 1)
            );
            setCurrent(1);
          } else {
            setTranslateX(containerRef.current?.clientWidth * (current + 1));
            setCurrent((prev) => ++prev);
          }
        }
      }
    },
    [current, children]
  );

  useEffect(() => {
    const translitionEnd = () => {
      if (containerRef.current) {
        if (current <= 1) {
          containerRef.current.style.transitionDuration = "0ms";
          setTranslateX(containerRef.current?.clientWidth * current);
        }
        if (current >= children.length) {
          containerRef.current.style.transitionDuration = "0ms";
          setTranslateX(containerRef.current?.clientWidth * children.length);
        }
      }
    };
    document.addEventListener("transitionend", translitionEnd, false);

    return () => {
      document.removeEventListener("transitionend", translitionEnd);
    };
  }, [current, children]);

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      actionHandler("next");
    }, 3000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [actionHandler]);
  const slides: any = useMemo<void>(() => {
    if (children.length > 1) {
      let items: any = Children.map(children, (child, index) => (
        <li key={index} className={styles.slide}>
          {child}
        </li>
      ));
      return [
        <li key={children.length + 1} className={styles.slide}>
          {children[children.length - 1]}
        </li>,
        ...items,
        <li key={children.length + 2} className={styles.slide}>
          {children[0]}
        </li>,
      ];
    }
    return <li className={styles.slide}>{children[0]}</li>;
  }, [children]);
  useLayoutEffect(() => {
    if (containerRef.current)
      setTranslateX(containerRef.current?.clientWidth * current);
  }, []);
  return (
    <div className={styles.slider}>
      <ul
        className={styles.container}
        ref={containerRef}
        style={{
          transform: `translate3d(${-translateX}px, 0 , 0)`,
          transitionDuration: "400ms",
        }}
      >
        {slides}
      </ul>
      <span
        onClick={() => {
          actionHandler("prev");
        }}
        className={`${styles.btn} ${styles.btnLeft}`}
      >
        <IoIosArrowBack className={styles.icon} />
        <div className={styles.blur}></div>
      </span>
      <span
        onClick={() => {
          actionHandler("next");
        }}
        className={`${styles.btn} ${styles.btnRight}`}
      >
        <IoIosArrowForward className={styles.icon} />
        <div className={styles.blur}></div>
      </span>
      <span className={styles.indicators}>
        {children?.map((_: any, idx: number) => {
          return (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={
                current === idx
                  ? styles.indicator
                  : `${styles.indicator} ${styles.indicatorInactive}`
              }
            ></button>
          );
        })}
      </span>
    </div>
  );
};

export default Slider;
