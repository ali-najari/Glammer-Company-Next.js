import styles from "./styles.module.scss"
import { ISingleTicketProps } from "../type";

const SingleTicket = ({
    icon,
    title,
    description,
    price,
    buttonLabel,
    onClick
}: ISingleTicketProps & { onClick?: () => void }) => {
    
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.leftSide}>
                <div className={styles.icon}>{icon}</div>
                <div className={styles.title}>{title}</div>
            </div>
            <div className={styles.between}>
                {description}
            </div>
            <div className={styles.rightSide}>
                <span className={styles.price}>{price}</span>
                <button onClick={onClick}>{buttonLabel}</button>
            </div>
        </div>
    )
};

export default SingleTicket;
