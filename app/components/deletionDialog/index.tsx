"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { useDeleteProduct } from "@/app/api/hooks/useProductDeletionMutation";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

type ActionDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  productId: string;
  sessionToken: string | undefined;
};

const DeletionDialog = ({
  isOpen,
  onClose,
  productId,
  sessionToken,
}: ActionDialogProps) => {
  const deleteProductMutation = useDeleteProduct();

  const { toast } = useToast();

  const router = useRouter();

  const handleDelete = async () => {
    try {
      await deleteProductMutation.mutateAsync({
        productId,
        token: sessionToken || "",
      });
      toast({
        title: "Product deleted successfully",
      });
      onClose();
      router.push("/product");
    } catch (error) {
      toast({
        title: "An error occured please try again",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Deletion</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this product? This action cannot be
            undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={handleDelete}>
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeletionDialog;
