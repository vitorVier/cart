import { BsCartPlus } from "react-icons/bs"

import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext" 

export function Produto() {

    const {} = useContext(CartContext);

    return (
        <main className="flex justify-center w-full pt-8 px-10">
            <section className="flex items-center gap-20">
                <img 
                    className="w-full rounded-lg max-w-80 max-h-80 mb-2"
                    src="data:image/webp;base64,UklGRngFAABXRUJQVlA4IGwFAADwHACdASqFAHAAPj0Mj0eiERELyCADxLSEOADLsLm6BXSUewUDfGdyueHWTzee6+98D/VerBNBueuNvmHf3z6APkw0HPUX7DD2ohy1pb4SLEUaZsmCU0BFYLgY/Z/pliFvwAzs9/zR2i/dOdgw9oiTwisVDZxrAc43UxDiBYn8AdMXeKf33QHJgNQPQ5xWl9h1VN4agm7VpRgBcuFqfkpE4h+GKL/JyLaU9N3B0WUpOPuZkFzWl6b+Fr7S3PV1OlTiam2qttnXDcpkYCJIau1u8ZLf3qfToZcq04HqWX/3v2Tc/A2temWbI6dytQbNiwAA/t0wGOdch3xrG5ihMGqUjLTaTzGgAImYXeuaubnHSDi8+pFVN0UiBocAp5ofD0L1UORF5/TD/SiHOeHd7YuUPfl6fHZjbM/cN7SQk17WTHbO2XP1uG0mqRjlFo4OTZZzkey9js3CKwxKthrc0g/WaNYSwMSv6M0lj5ANEUQYpPOvOpUr3+r/s17M/Pe2UNQeU6g7oHEdxlVLiJVkBMquPHs6FSpq5lDmRwEEs44xoqn+Dojl6Jvk3kjzPkbjfMJ2dJ+pa19f1f3TKAgLc951FS73P+rgSGsJIf/vilUyk7f8gf9Df/5/WA47QGQGiTaOKDsfQONBAA6gj2S5aT5lPGjMVpCSSliIz/VatD5/4KTKyjhfST9/jl0875+pZQmel1cxUBAJLa2H2duLnAyQ86goScXcI+xo5EJ3UTuqEqCVaEnTYEf39wNI7cFiX9zLDN9u7Y0DqNY5/HRqBjq72CSStOUt4bPk/4ZTdToteo62DwCM5uVP7C0elv08A8zTKl70EL8btokb22e4HeNwk4823bWydBYv7Nipk/mPIXRQ2ph2xO9yLI/ENzB1cCnnELbnyQtXsJb3TI3Qe1Wthws7U6viQuy9Mrn/adcjxIrwFLRHFqvLkBH94N8WfDjeM3/WXARkAltO3o27EMKbVpoupbxw0Z189awt4WgtFPsqzN5cJq+lWNnnRVu+Hv7EZFwV4ezwNXuLU0Mc0/1JcnIOOFoqKK8RP9VFwPlHpztRpafIkgZsdedJpAM8ST0+ttRIgUKkyqXV3liayTHuih5rbFpsuigwe/CHwicbs+W5QXdO3n53aW6Kbhm6pAy1Thlib8UULSu9c6c5mExzC9SbsAK9iRvys0YjCY1kgH076y7b9NN4VYHxfdEAW3S0QlIKv1RCUuoi1E6iKj7umSaW/h3fNcssfwKYsBv8V+dbW/Uxpv5FJtA+bZ2R6OrEpXkooe2NCfRLnH9CztJxvyGlUvd/cHs2OW+6kkOEtxE0Kld/5fFeoQKt7p34t19hCM5Qt1r47s6AY/+0OtAcWWhQv99rV+7+x2TLlOEvppsBFKBVtrjQLPj7t5AKeRggLCQWOQaZ2iiHfF94TsHtsJYL+p7/SpDFtfhwlFXlXW2ZZrAW9BRbEVUDrAVFW+9d90VjMcfeeKxcTh75oajuNQ+jw7OZrItTVW7bh28FGS8QYw4nFXYUbfc/Ij6HU2uXiyVbtF4gBhE7vttU51y8Rd0EucESjpGqLI8bTz2CycrjMsrilvY9TIieKeUQkOMwWOKIGmRScjB7rpo76B9nnokxGbAm+HfyHioXH9MD133is2zTF62r7JAawTNs3BtkVwdP25CsZA1SRyYKYjZr4Tjzl74gsVVxcj/TgTMlQ9VD2uht2QR5aVMrAHzhkH/AWWRKh2YCt2SyMxfcq7hR/vcXC/tUXfOq5EP/nv/1ODdOeEIB67Im7b675Jo9Nlv8UFMi33ow5U8Ue9zQ8Lc7piEUS18Q7btRAnEdGzdUgRQGSJHix+AIyQAAAA==" 
                    alt="Logo do produto" 
                />

                <div className="flex flex-col justify-between gap-5">
                    <h1 className="font-bold text-xl">Protudo Notebook X</h1>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, obcaecati quis omnis sed fugit labore adipisci asperiores in laborum esse, vel, veritatis doloribus harum quas eius sunt. Tempore, sint? Iure!</p>

                    <div className="flex items-center gap-2.5">
                        <p>R$ 379,90</p>
                        <button className="bg-zinc-900 p-1 rounded cursor-pointer">
                            <BsCartPlus size={24} color="#FFF"/>
                        </button>
                    </div>
                </div>
            </section>
        </main>
    )
}