import {useEffect, useState} from "react";
import Link from "next/link";
import useSession from "../../hooks/useSession";

function HeadsUp() {
    const [isLogged, setIsLogged] = useState(false);
    const session = useSession();

    useEffect(() => {
        if(session.user) {
            setIsLogged(true);
        }
    }, []);

    return (
        <>
            {!isLogged && (
                <div>
                    <Link href='/signup'>
                        <div
                            className='
                            text-2xl sm:text-3xl md:text-5xl lg:text-5xl
                            font-bold text-center
                            hover:drop-shadow-2xl hover:scale-105
                            transition-all
                            '
                        >
                            Ainda não tens conta? <span className='text-orange-600'>Cria uma</span>
                        </div>
                    </Link>
                    <div
                        className='
                        flex flex-col justify-center items-center
                        text-sm sm:text-sm md:text-lg lg:text-xl
                        mt-4 mb-7 text-center
                        max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl
                        mx-auto
                        '
                    >
                        <p>Ao criares uma conta podes usufruir do evento na sua totalidade.</p>
                        <p>Criamos um sistema no qual as empresas podem salvar o teu perfil para consultarem mais tarde e gravarem o teu CV para que a tua presenção não seja esquecida!</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default HeadsUp;