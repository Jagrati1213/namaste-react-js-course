
// Multi Language functionality
import { changeLang } from '../../utils/redux/slice/Config';

// Function runs on selected language
const handleLanguageChange = (e) => {
    dispatch(changeLang(e.target.value));
}

gpt.showRecommendation && <select className='bg-gray-600 text-white px-5 border-2 border-solid border-yellow-800 focus:border-yellow-800 rounded-sm' onChange={handleLanguageChange}>
    {
        SUPPORTED_LANGUAGES.map((lang, index) => <option key={index} value={lang.value}>{lang.name}</option>)
    }
</select>
