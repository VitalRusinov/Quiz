import styles from './Results.module.scss';

const getResultTitle = (correctAnswersCount: number, answersCount: number) => {
  const num = correctAnswersCount / answersCount;

  switch(true) {
    case num === 1:
      return(
        <div className={styles.title}>
          <h1>Поздравляем!</h1>
          <span>
            Вы правильно ответили на все вопросы.<br />
            Вы действительно отлично разбираетесь в IT. 
          </span>
        </div>
      )
  
    case num < 1 && num >= 0.5:
      return(
        <div className={styles.title}>
          <h1>Хороший результат!</h1>
          <span>
            Вы ответили правильно на {correctAnswersCount} вопросов.<br />
            Так держать! 
          </span>
        </div>
      )
  
      case num > 0 && num < 0.5:
      return(
        <div className={styles.title}>
          <h1>Так себе результат!</h1>
          <span>
            Вы ответили правильно на {correctAnswersCount} вопроса.<br />
            Нужно подучить теорию.
          </span>
        </div>
      )

      case num === 0:
        return(
          <div className={styles.title}>
            <h1>{`Упс :(`}</h1>
            <span>
              Вы неправильно ответили на все вопросы. <br />
              Нужно подучить теорию.
            </span>
          </div>
        )

    default:
      console.log('Введены неправильные данные в функцию getResultTitle()')
  }
}

export default getResultTitle;