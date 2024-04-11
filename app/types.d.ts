// Global types

export {};

declare global {
    // Zustand types
    // Page types
    // Component types
    // Utils types
    // Constants types


    // ZUSTAND TYPES
    interface AuthSlice {

    }
    type AppStoreState = AuthSlice;
    interface INewUser {
        firstName: string,
        lastName: string,
        email: string,
        password: string,
        phone: string,
        role: "Agent" | "Developer" | "Landlord" | "User"
    }
    interface IUser extends INewUser {
        _id: string,
        isDeleting?: boolean
    }
    interface IUserStore {
        users?: IUser[],
        user?: IUser,
        currentUser?: IUser
    }
    interface IUserService extends IUserStore {
        login: (email: string, password: string) => Promise<void>,
        logout: () => Promise<void>,
        register: (user: INewUser) => Promise<void>,
        getAll: () => Promise<void>,
        getById: (id: string) => Promise<void>,
        getCurrent: () => Promise<void>,
        create: (user: INewUser) => Promise<void>,
        update: (id: string, params: Partial<INewUser>) => Promise<void>,
        delete: (id: string) => Promise<void>
    }



    // PAGE TYPES
    interface ComponentWithChildrenOnly {
        children: React.ReactNode;
    }
    interface GeneralInputProps<T> {
        name?: string;
        value?: string;
        label?: string;
        labelStyles?: CSSProperties | CSSStyleDeclaration;
        inputStyles?: CSSProperties | CSSStyleDeclaration;
        changeHandler?: (e: React.ChangeEvent<T>) => void;
        blurHandler?: (e: React.FocusEvent<T>) => void;
        focusHandler?: (e: React.FocusEvent<T>) => void;
        mouseEnterHandler?: (e: React.MouseEvent<T>) => void;
        mouseLeaveHandler?: (e: React.MouseEvent<T>) => void;
        disabled?: boolean;
        errMsg?: string;
        infoMsg?: string;
        btnText?: string;
    }
    interface GeneralButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
        type?: "button" | "submit" | "reset";
        fullWidth?: boolean;
        link?: string;
        clickHandler?: () => void;
        width?: string;
        text: string;
        leftIcon?: string;
        rightIcon?: string;
        styles?: CSSProperties | CSSStyleDeclaration;
        textStyles?: CSSProperties | CSSStyleDeclaration;
    }
    interface InputProps
        extends GeneralInputProps<HTMLInputElement | HTMLSelectElement> {
        type?: HTMLInputTypeAttribute;
        placeholder?: string;
        borders?;
    }
    interface SelectOptionProps {
        text: string;
        value: string;
        image?: string;
    }
    interface Select
        extends GeneralInputProps<HTMLInputElement | HTMLSelectElement> {
        placeholder?: string;
        optionsArray: SelectOptionProps[];
        borders?: boolean;
        absolute?: boolean;
    }
    interface CompoundPhoneInputProps {
        phoneCodeName: string;
        phoneCodeValue: string;
        phoneCodeOptions: SelectOptionProps[];
        phoneName: string;
        phoneValue: string;
        placeholder?: string;
        label?: string;
        labelStyles?: CSSProperties | CSSStyleDeclaration;
        changeHandler: (e: React.ChangeEvent<T>) => void;
        disabled?: boolean;
        errMsg?: string;
    }
    interface ColoredButtonProps extends GeneralButtonProps {
        colour: "blue" | "red" | "white";
    }




    // COMPONENT TYPES
    interface SignInFormValues {
        email: string;
        password: string;
    }




    // UTILS TYPES





    // CONSTANTS TYPES

}