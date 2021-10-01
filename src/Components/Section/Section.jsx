import s from "./Section.module.css"

function Section ({title}) {
    return (
        <div className={s.section}>
            <h1 className={s.title} >
                {title}
            </h1>
        </div>
    )

}

export default Section;