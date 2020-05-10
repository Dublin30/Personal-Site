using System.Web.Optimization;

namespace PersonalSite
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/Scripts/js").Include(
                        "~/Scripts/js/bootstrap.js",
                        "~/Scripts/js/bootstrap.min.js",
                        "~/Scripts/js/contactform.js",
                        "~/Scripts/js/main.js",
                        "~/Scripts/js/jquery.min.js",
                        "~/Scripts/js/jquery.js"
                        ));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                "~/Content/css/bootstrap.css",
                "~/Content/css/bootstrap.min.css",
                "~/Content/css/Custom1.css",
                "~/Content/css/style.css",
                "~/Content/css/font-awesome/css/font-awesome.css",
                "~/Content/css/font-awesome/css/font-awesome.min.css"
                ));

        }
    }
}
