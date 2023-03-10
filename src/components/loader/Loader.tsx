
import Image from 'next/image';

function Loader() {
    return (
        <div>
            <Image src={"/Loader.gif"} alt="Loader..." fill className="object-cover" />
        </div>
    );
}

export default Loader;