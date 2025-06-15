// import React from "react";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogFooter,
// } from "@/components/ui/dialog";
// const EditProduct = ({editDialog,setEditDialog}) => {
//   return (
//     <Dialog open={editDialog} onOpenChange={setEditDialog}>
//       <DialogContent>
//         <DialogHeader>
//           <DialogTitle>Edit Product</DialogTitle>
//         </DialogHeader>
//         <div className="grid gap-4 py-4">
//           {editRow && (
//             <>
//               <div>
//                 <Label>Name</Label>
//                 <Input
//                   value={editRow.name}
//                   onChange={(e) =>
//                     setEditRow({ ...editRow, name: e.target.value })
//                   }
//                 />
//               </div>
//               <div>
//                 <Label>Price</Label>
//                 <Input
//                   type="number"
//                   value={editRow.price}
//                   onChange={(e) =>
//                     setEditRow({ ...editRow, price: Number(e.target.value) })
//                   }
//                 />
//               </div>
//               <div>
//                 <Label>Stock</Label>
//                 <Input
//                   type="number"
//                   value={editRow.stock}
//                   onChange={(e) =>
//                     setEditRow({ ...editRow, stock: Number(e.target.value) })
//                   }
//                 />
//               </div>
//             </>
//           )}
//         </div>
//         <DialogFooter>
//           <Button onClick={handleUpdate}>Update</Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default EditProduct;
