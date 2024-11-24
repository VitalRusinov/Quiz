import React from "react";
import styles from "./ProgressBar.module.scss";

interface ProgressBarProps {
  value: number; // Текущее значение прогресса
  max: number; // Максимальное значение прогресса
  label?: string; // Дополнительная подпись для прогресс-бара
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, max, label }) => {
  // Ограничиваем значение от 0 до max
  const progress = Math.min(Math.max(value, 0), max);
  const percentage = (progress / max) * 100;

  return (
    <div className={styles["progress-bar"]}>
      {/* Верхняя линия с числами */}
      <div className={styles["progress-bar__numbers"]}>
        <span className={styles["progress-bar__start"]}>0</span>
        <span className={styles["progress-bar__end"]}>{max}</span>
      </div>
      {/* Основной трек прогресс-бара */}
      <div className={styles["progress-bar__track"]}>
        <div
          className={styles["progress-bar__fill"]}
          style={{ width: `${percentage}%` }}
          aria-valuenow={progress}
          aria-valuemax={max}
          aria-label={label}
        />
      </div>
      {/* Подпись с текущим значением */}
      <div
        className={styles["progress-bar__value"]}
        style={{ left: `${percentage}%` }}
      >
        {progress}
      </div>
    </div>
  );
};

export default ProgressBar;
