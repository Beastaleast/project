import react from 'react';

export default function Loader({isLoading})
{
    return(<>
        {isLoading && <div className="loaderonpage"><span class="loader"></span></div>}
        </>
    )
}