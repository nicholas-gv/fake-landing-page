import styles from "./loading.module.css";

export default function Loading() {
	return (
		<div className={styles.container}>
			<div className={`${styles.skeleton} ${styles.h100} ${styles.w10}`} />
			<div className={`${styles.skeleton} ${styles.h50} ${styles.w70}`} />
			<div className={`${styles.skeleton} ${styles.h50} ${styles.w70}`} />
			<div className={`${styles.skeleton} ${styles.h50} ${styles.w70}`} />
			<div className={`${styles.skeleton} ${styles.h50} ${styles.w70}`} />
			<div className={`${styles.skeleton} ${styles.h50} ${styles.w70}`} />
			<div className={`${styles.skeleton} ${styles.h100} ${styles.w10}`} />
			<div className={`${styles.skeleton} ${styles.h50} ${styles.w70}`} />
			<div className={`${styles.skeleton} ${styles.h50} ${styles.w70}`} />
			<div className={`${styles.skeleton} ${styles.h50} ${styles.w70}`} />
			<div className={`${styles.skeleton} ${styles.h50} ${styles.w70}`} />
		</div>
	);
}
