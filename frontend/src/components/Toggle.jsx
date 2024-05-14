import './Toggle.css'

export const Toggle =({ handleChange, isChecked}) => {
    return(
        <div className='toggle-container'>
           <input 
            type='checkbox'
            id="check" 
            className='toggle'
            onChange={handleChange}
            checked={isChecked}
            />
            
            <label htmlFor="check">
                <div className="toggle-image">
                    {isChecked ? (
                    <img src="../Resources/darklight.png" width="55em" height="55em" alt="Checked" />
                    ) : (
                    <img src="../Resources/lightlight.png" width="55em" height="55em" alt="Unchecked" />
                    )}
                </div>
                <div className='toogleIco'>
                    
                </div>
            </label>
        </div>
    );
}
