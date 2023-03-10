import MuiModal from "@material-ui/core/Modal"
import { useInfoStore } from 'src/store';
import {GrClose} from "react-icons/gr";

export const Modal = () => {
    const {modal, setModal, currentMovie} = useInfoStore()
    const handleClose = () => {
        setModal(false);
    }
  return (
    <MuiModal open={modal} onClose={handleClose}>
      <>
      <button onClick={() => setModal(false)} className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none text-white  bg-[#181818cd]">
        <GrClose className="text-red-600" />
      </button>
      </>
    </MuiModal>
  )
}
