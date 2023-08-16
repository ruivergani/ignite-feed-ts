import './global.css';
import styles from './App.module.css'; // module CSS for the App class
import { Header } from "./components/Header";
import { Post, PostType } from './components/Post';
import { Sidebar } from './components/Sidebar';

// Posts Array
const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/ruivergani.png",
      name: "Rui Vergani Neto",
      role: "Front-end Developer"
    },
    // Nao deixar disponivel o uso de HTML para conteudo (avoid allowing user to input scripts tags)
    content: [
      { type: 'paragraph', content: 'Fala Rui Neto 👋',},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      { type: 'link', content: '👉 jane.design/doctorcare',},
    ],
    publishedAt: new Date('2023-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Diego Fernandes",
      role: "Web Developer"
    },
    // Nao deixar disponivel o uso de HTML para conteudo (avoid allowing user to input scripts tags)
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋',},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      { type: 'link', content: '👉 jane.design/doctorcare',},
    ],
    publishedAt: new Date('2023-05-10 20:00:00')
  },
]

function App() {
  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {
            // map the array (same concept as API)
            posts.map(post => {
              return (
                <Post
                  key={post.id} // identifier for unique Post (react must have)
                  post = {post}
                />
              )
            })
          }
        </main>
      </div>
    </>
  )
}
export default App;

// Default Export = usa a palavra default e pode ser renomeado o componente na importacao
// Named Exports = nao usa a palavra default e nao pode ser renomeado o componente