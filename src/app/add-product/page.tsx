export default function AddProductPage() {
  return (
    <div>
      <h1 className="mb-3 text-xl font-bold">Add Product</h1>
      <form>
        <input
          required
          name="name"
          placeholder="name"
          type="text"
          className="input-bordered input mb-3 w-full"
        />
        <textarea
          required
          name="description"
          placeholder="Description"
          className="textarea-bordered textarea mb-3 w-full"
        />
        <input
          required
          name="imageUrl"
          placeholder="image URL"
          type="url"
          className="input-bordered input mb-3 w-full"
        />
        <input
          required
          name="price"
          placeholder="Price"
          type="number"
          className="input-bordered input mb-3 w-full"
        />
        <button type="submit" className="btn-primary btn-block btn">
          Add Product
        </button>
      </form>
    </div>
  );
}
