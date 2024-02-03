import ReactModal from "react-modal"

const Modal = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return(
        <div>
            <button onClick={() => setModalIsOpen(true)}>Avaa kuva suuremmaksi</button>
            <ReactModal
            appElement={document.getElementById('root')}
            isOpen={modalIsOpen}
            onRequestClose={()=>setModalIsOpen(false)}
            contentLabel="Esimerkki Modal"
            >   <h2>Modalin Sisältö</h2>
            <button onClick={() => setModalIsOpen(false)}>Sulje</button></ReactModal>
        </div>
    )
}

export default Modal;