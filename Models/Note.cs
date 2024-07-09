﻿namespace NoteTakerModels
{
    public class Note
    {
        
        public int Id { get; set; }
        public int Top { get; set; }
        public int Left { get; set; }
        public int Width { get; set; }
        public int Height{ get; set; }
        public required String Text { get; set; }
    }
}
