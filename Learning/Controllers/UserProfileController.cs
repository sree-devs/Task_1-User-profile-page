using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Learning.Models;

namespace Learning.Controllers
{
    public class UserProfileController : Controller
    {
        public IActionResult  Index()
        {
            var userProfile = new UserProfile
            {
                Name = "DEVIKA M",
                Rank = 5,
                TotalUsers = 15,
                UserScore = 150,
                Achievements = new List<string> { "Top Learner", "Quiz Master", "Certificate of Excellence" },
                CourseProgress = new Dictionary<string, int>
                {
                    { "C# Basics", 80 },
                    { "ASP.NET Core", 60 },
                    { "MVC Fundamentals", 100 }
                },
                TimeToNextReward = 3600  // 2 hours
            };

            return View(userProfile);
        }
    }
}
