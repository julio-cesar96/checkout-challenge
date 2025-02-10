export interface ErrorModalProps {
    open: boolean;
    errorMessage: string | null;
    onClose: () => void;
}