import { Breadcrumbs } from "@/components/breadcrumbs";
import PageContainer from "@/components/layout/page-container";
import { UserClient } from "@/components/tables/user-tables/client";
import { analysisBatches } from "@/constants/data";

const breadcrumbItems = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "Reports", link: "/dashboard/reports" },
];
export default function page() {
  return (
    <PageContainer>
      <div className="space-y-2">
        <Breadcrumbs items={breadcrumbItems} />
        <UserClient data={analysisBatches} />
      </div>
    </PageContainer>
  );
}
