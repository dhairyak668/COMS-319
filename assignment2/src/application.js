import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Cart from "./Cart";
import Confirmation from "./Confirmation";
import Browse from "./Browser";

function MyApplication() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [dataF, setDataF] = useState({});
  const [viewer, setViewer] = useState(0);

  const onSubmit = data => {
    console.log(data);
    setDataF(data); 
    setViewer((viewer + 1) % 3);
    console.log(viewer);
  };

  const updateHooks = () => {
    onSubmit(); 
  };

  const decrementViewer = () => {
    setViewer((viewer - 1 + 3) % 3);
  };

  const additionalData = "Additional data to be passed to the Cart view";

  return (
    <div>
      {viewer === 0 && <Browse handleSubmit={handleSubmit} updateHooks={updateHooks} onSubmit={onSubmit} register={register} errors={errors} />}
      {viewer === 1 && <Cart   handleSubmit={handleSubmit} onSubmit={onSubmit} errors={errors} dataF={dataF} updateHooks={updateHooks} register={register} />}
      {viewer === 2 && <Confirmation dataF={dataF} updateHooks={updateHooks} />}
      <button className="btn btn-primary" onClick={decrementViewer}  hidden={viewer === 0 || viewer == 2}>Return</button>
    </div>
  );
}

export default MyApplication;