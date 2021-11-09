import propTypes from "prop-types";
import '../App.css'

export default function Section({ title, children }) {
  return (
    <section className="contaner">
      <h2 className="title">{title}</h2>
      {children}
    </section>
  )
}

Section.propTypes = {
  title: propTypes.string,
  children: propTypes.any,
}
