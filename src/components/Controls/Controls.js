import styles from './Controls.module.scss'
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io'
export default function Controls({
    total = 0,
    onChangePage,
    onChangeItemsPerPage,
    showNext,
    showPrevious,
}) {
    return (
        <div className={styles.controls}>
            <div className={styles.buttonsContainer}>
            {showPrevious && (
                    <button className="control" onClick={() => onChangePage("previous")}>
                        <IoIosArrowBack /> Previous Page
                    </button>
                )}
                {showNext && (
                    <button className="control" onClick={() => onChangePage("next")}>
                        Next Page <IoIosArrowForward />
                    </button>
                )}
                
            </div>
            <div>
            <select onChange={(e) => onChangeItemsPerPage(e.target.value)} role="listbox">
                {new Array(Math.floor(total / 5)).fill().map((_, i) => (
                    <option key={i} value={(i + 1) * 5}>{(i + 1) * 5}</option>
                ))}
                <option value={total}>All</option>
            </select>
            </div>
        </div>
    )
}
