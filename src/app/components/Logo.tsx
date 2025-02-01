import Image from "next/image";


const Logo: React.FC = () => {
    return <>
        <Image className="logoHome" src={"/logo.png"}  width={450} height={300} alt="logo"/>
    </>
}

export default Logo;