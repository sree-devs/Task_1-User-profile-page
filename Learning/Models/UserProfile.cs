 using System.Collections.Generic;

namespace Learning.Models
{
    public class UserProfile
    {
        public string? Name { get; set; }
        public int Rank { get; set; }
        public int TotalUsers { get; set; }
        public int UserScore { get; set; } 
        public List<string>? Achievements { get; set; }
        public string? ImagePath { get; set; }
        public DateTime DateEarned { get; set; }
        public Dictionary<string, int> ?CourseProgress { get; set; } // CourseName -> CompletionPercentage
        public int TimeToNextReward { get; set; } // In seconds
    }
}
