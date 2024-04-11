import AuthLayout from '../_layout/AuthLayout';

export default Layout;

function Layout({ children }: { children: React.ReactNode }) {
    
    return (
        <AuthLayout>
            { children }
        </AuthLayout>
    );
}