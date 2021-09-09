import s from './style.module.css'

const Layout = ({title, desc, urlBg=false, colorBg=false}) => {
  // const styleRoot = urlBg? {backgroundImage:urlBg} : {backgroundColor:colorBg}
  const styleRoot = {
    backgroundImage:`url(${urlBg})`,
    backgroundColor:colorBg
  }

  return (
    <>
      <section style={styleRoot} className={s.root}>
          <div  className={s.wrapper}>
              <article>
                  <div className={s.title}>
                      <h3>{title}</h3>
                      <span className={s.separator}></span>
                  </div>
                  <div className={`${s.desc} ${s.full}`}>
                      <p>{desc}</p>
                  </div>
              </article>
          </div>
      </section>
    </>
  )
}


export default Layout 