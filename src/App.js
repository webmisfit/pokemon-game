
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";


import bg2 from './assets/bg2.jpg'
import bg3 from './assets/bg3.jpg'

const App = () => {
  return (
    <>
      <Header title='Pokemon game' desc='Cool game'/>
      <Layout title='Gnida' desc='No comments' urlBg={bg2}/>
      <Layout title='Сникерс' desc='африканец' colorBg='red'/>
      <Layout title='Иваныч' desc='люблю шалить' urlBg={bg3}/>
      <Footer/>
    </>
  )
}

export default App;
