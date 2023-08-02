import mmk from '../../assets/mmk.pdf'

const CTA = () => (
  <div className="cta">
    <a href={mmk} download className="btn">
      Download CV
    </a>
    <a href="#contact" className="btn btn-primary">
      Let's Talk
    </a>
  </div>
)

export default CTA
