using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;

namespace API.DTOs
{
    public class RegisterDto
    {
        [Required]
        public string username { get; set; }
        
        [Required]
        public string password { get; set; }

    }
}