export const Dashboard = ({ user }) => {
  return (
    <section className="section">
      <h4>Hello, {user?.name ?? "user not found"}</h4>
    </section>
  );
};
