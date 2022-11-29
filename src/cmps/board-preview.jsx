import previewImg from '../assets/imgs/board-preview.svg'
import { CiStar } from 'react-icons/ci'
import { Link } from 'react-router-dom'

//TODO: Click is Link to the board work managment

export const BoardPreview = ({ board }) => {
    return  <Link to={`/board/${board._id}`}> 
    <div className="board-preview">
        <img src={previewImg} alt="preview" />
        <div className='flex space-between align-center preview-text'>
            <div className='flex align-center'>
                <svg viewBox="0 0 20 20" fill="currentColor" width="22" height="22" aria-hidden="true" aria-label="Public board" className="icon_component">
                    <path d="M7.5 4.5H16C16.2761 4.5 16.5 4.72386 16.5 5V15C16.5 15.2761 16.2761 15.5 16 15.5H7.5L7.5 4.5ZM6 4.5H4C3.72386 4.5 3.5 4.72386 3.5 5V15C3.5 15.2761 3.72386 15.5 4 15.5H6L6 4.5ZM2 5C2 3.89543 2.89543 3 4 3H16C17.1046 3 18 3.89543 18 5V15C18 16.1046 17.1046 17 16 17H4C2.89543 17 2 16.1046 2 15V5Z" fill="#676879" fillRule="evenodd" clipRule="evenodd"></path>
                </svg>
                <h4>{board.title}</h4>
            </div>
            <CiStar className='favorite-icon' />
        </div>
        <div className='flex align-center preview-text'>
            <svg className="product-svg-icon" width="18" height="18" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.91445 22.1991C0.261334 21.0604 -0.140425 18.8191 1.0171 17.1929L10.7871 3.46741C11.5023 2.46258 12.6456 1.92775 13.8048 1.93439C14.9624 1.92926 16.1035 2.464 16.8177 3.46743L26.5903 17.1966C27.7478 18.8228 27.346 21.0641 25.6929 22.2027C24.0398 23.3414 21.7613 22.9462 20.6038 21.32L13.8024 11.7649L7.00356 21.3164C5.84604 22.9425 3.56756 23.3377 1.91445 22.1991Z" fill="#6C6CFF"></path>
                <path d="M1.91738 1.34482C0.264263 2.48348 -0.137495 4.7248 1.02003 6.35097L10.7858 20.0706C11.4986 21.0719 12.6364 21.6065 13.7915 21.6036C14.9535 21.6128 16.1005 21.0779 16.8174 20.0707L26.5832 6.35097C27.7408 4.7248 27.339 2.48348 25.6859 1.34482C24.0328 0.20617 21.7543 0.601376 20.5968 2.22754L13.8016 11.7738L7.00649 2.22754C5.84897 0.601375 3.57049 0.206169 1.91738 1.34482Z" fill="url(#paint0_linear_1581_89970)"></path>
                <path d="M9.33901 5.50415L4.87793 11.7714L9.33901 18.0386L13.8001 11.7714L9.33901 5.50415Z" fill="#7E7EFF"></path>
                <defs>
                    <linearGradient id="paint0_linear_1581_89970" x1="15.9019" y1="11.1491" x2="14.7628" y2="21.9687" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#8F8FFF"></stop>
                        <stop offset="1" stopColor="#BABAFD"></stop>
                    </linearGradient>
                </defs>
            </svg>
            <span>work management > Main workspace</span>
        </div>
    </div>
    </Link>
}
