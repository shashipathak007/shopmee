import { X } from "lucide-react";

const Popup = ({ orderPopup, setOrderPopup }) => {
  if (!orderPopup) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-slate-900 rounded-xl w-[90%] max-w-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Place Order</h2>
          <button onClick={() => setOrderPopup(false)}>
            <X />
          </button>
        </div>

        <form className="space-y-4">
          <input className="w-full p-3 rounded border dark:bg-slate-800" placeholder="Name" />
          <input className="w-full p-3 rounded border dark:bg-slate-800" placeholder="Email" />
          <textarea className="w-full p-3 rounded border dark:bg-slate-800" placeholder="Address" />
          <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700">
            Confirm Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
