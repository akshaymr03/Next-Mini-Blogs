export const dynamic = "force-dynamic";

export default async function SSRPage() {
    const date = new Date().toLocaleString();

    return (
        <div className="max-w-xl mx-auto bg-white shadow-md rounded-xl p-8 mt-10">
            <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center">
                🕒 Server-Side Rendered Page
            </h1>
            <p className="text-gray-700 text-center">
                <span className="font-semibold">Current server time:</span>
                <br />
                <span className="text-lg text-blue-600 mt-2 inline-block">{date}</span>
            </p>
        </div>
    );
}
