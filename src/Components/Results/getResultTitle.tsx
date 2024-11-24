import styles from './Results.module.scss';
import { useTranslation } from 'react-i18next';

const getResultTitle = (correctAnswersCount: number, answersCount: number) => {
  const { t } = useTranslation();

  const num = correctAnswersCount / answersCount;

  switch(true) {
    case num === 1:
      return(
        <div className={styles.title}>
          <h1>{t('congratulations')}</h1>
          <span>{t('allCorrect1')}<br />{t('allCorrect2')}</span>
        </div>
      )
  
    case num < 1 && num >= 0.5:
      return(
        <div className={styles.title}>
          <h1>{t('good')}</h1>
          <span>
            {t('answered')}{t('answers', { count: correctAnswersCount })}.<br />
            {t('keep')}
          </span>
        </div>
      )
  
      case num > 0 && num < 0.5:
      return(
        <div className={styles.title}>
          <h1>{t('bad')}</h1>
          <span>
            {t('answered')}{t('answers', { count: correctAnswersCount })}.<br />
            {t('needLern')}
          </span>
        </div>
      )

      case num === 0:
        return(
          <div className={styles.title}>
            <h1>{t('oops')}</h1>
            <span>
              {t('allIncorrect')}<br />
              {t('needLern')}
            </span>
          </div>
        )

    default:
      console.log(t('default'))
  }
}

export default getResultTitle;