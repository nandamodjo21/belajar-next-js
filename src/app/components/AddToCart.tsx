'use client';
export default function AddToCart() {
    return(
        <>
            <div>
                <button className="bg-amber-200 w-50 rounded-full p-3"
                        onClick={event => console.log(`click ${event}`)}>Add To Card
                </button>
            </div>
        </>
    )
}